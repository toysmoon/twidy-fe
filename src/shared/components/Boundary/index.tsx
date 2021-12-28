import { ComponentProps, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

interface Props extends Omit<ErrorBoundaryProps, 'renderFallback'> {
  pending?: ComponentProps<typeof Suspense>['fallback'];
  reject?: any;
}

export default function Boundary({
  pending,
  reject,
  children,
  onError,
}: Props) {
  if (!pending) {
    return (
      <ErrorBoundary FallbackComponent={reject} onError={onError}>
        {children}
      </ErrorBoundary>
    );
  }

  if (!reject) {
    return <Suspense fallback={pending}>{children}</Suspense>;
  }

  return (
    <ErrorBoundary FallbackComponent={reject} onError={onError}>
      <Suspense fallback={pending}>{children}</Suspense>
    </ErrorBoundary>
  );
}
