export default store => next => action => {
    const { shouldRecord = false } = action;
    if (shouldRecord) {
        // TODO: 发起埋点
    }
    return next(action);
};
