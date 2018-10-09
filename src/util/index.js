export const bind = (fn, context, ...partiallyAppliedArgs) => (
  (...runtimeArgs) => (
    fn.apply(context, [...partiallyAppliedArgs, ...runtimeArgs])
  )
);

