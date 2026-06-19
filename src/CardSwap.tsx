import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import gsap from 'gsap';
import './CardSwap.css';

type SizeValue = number | string;

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  customClass?: string;
};

type CardSwapProps = {
  width?: SizeValue;
  height?: SizeValue;
  cardDistance?: number;
  verticalDistance?: number;
  onSwapStart?: (idx: number) => void;
  onSwap?: (idx: number) => void;
  skewAmount?: number;
  easing?: 'linear' | 'elastic';
  children: React.ReactNode;
};

type Slot = {
  x: number;
  y: number;
  z: number;
  zIndex: number;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, className, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`rb-card ${customClass ?? ''} ${className ?? ''}`.trim()}
    />
  ),
);

Card.displayName = 'Card';

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLDivElement | null, slot: Slot, skew: number) => {
  if (!el) return;

  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true,
  });
};

function CardSwap({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  onSwapStart,
  onSwap,
  skewAmount = 6,
  easing = 'elastic',
  children,
}: CardSwapProps) {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 0.75,
          durMove: 0.75,
          durReturn: 0.78,
          promoteOverlap: 0.82,
          returnDelay: 0.05,
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length],
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimating = useRef(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    order.current = Array.from({ length: childArr.length }, (_, i) => i);
    refs.forEach((r, i) =>
      placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, refs.length), skewAmount),
    );

    return () => {
      tlRef.current?.kill();
      isAnimating.current = false;
    };
  }, [cardDistance, childArr.length, refs, skewAmount, verticalDistance]);

  const swap = useCallback(() => {
    if (order.current.length < 2 || isAnimating.current) return;

    isAnimating.current = true;
    const [front, ...rest] = order.current;
    const nextFront = rest[0];
    const elFront = refs[front]?.current;

    if (!elFront) {
      isAnimating.current = false;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        order.current = [...rest, front];
        onSwap?.(nextFront);
        isAnimating.current = false;
      },
    });
    tlRef.current = tl;

    tl.to(elFront, {
      y: '+=500',
      duration: config.durDrop,
      ease: config.ease,
    });

    tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
    tl.call(() => onSwapStart?.(nextFront), undefined, 'promote');

    rest.forEach((idx, i) => {
      const el = refs[idx]?.current;
      if (!el) return;

      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, 'promote');
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove,
          ease: config.ease,
        },
        `promote+=${i * 0.15}`,
      );
    });

    const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
    tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
    tl.call(() => {
      gsap.set(elFront, { zIndex: backSlot.zIndex });
    }, undefined, 'return');
    tl.to(
      elFront,
      {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        duration: config.durReturn,
        ease: config.ease,
      },
      'return',
    );
  }, [cardDistance, config, onSwap, onSwapStart, refs, verticalDistance]);

  const rendered = childArr.map((child, i) => {
    if (!isValidElement<CardProps>(child)) return child;
    const element = child as React.ReactElement<
      CardProps & React.RefAttributes<HTMLDivElement>
    >;

    return cloneElement(element, {
      key: i,
      ref: refs[i],
      style: { width, height, ...(child.props.style ?? {}) },
    });
  });

  return (
    <div
      ref={container}
      className="rb-card-swap-container"
      style={{ width, height }}
      role="button"
      tabIndex={0}
      aria-label="Swap to next skill card"
      onClick={swap}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          swap();
        }
      }}
    >
      {rendered}
    </div>
  );
}

export default CardSwap;
