const calculateShift = (dottedItems, activeItemIndex) => {
    const activeItemHeight = 58;
    const activeItemMargin = 20;
    const activeItemCenter = activeItemHeight / 2;
    const distanceBetweenCenters = activeItemHeight + activeItemMargin;

    // find pixel position of activeItem center (horizontal line)
    let activeItemPosition = activeItemIndex !== -1 ?
        activeItemCenter + activeItemIndex * distanceBetweenCenters : 0;

    // create array with dotted item positions
    const dottedItemPositionList = [];
    const dottedItemHeight = 60;
    dottedItems.forEach((item, i) => {
        dottedItemPositionList.push(i * dottedItemHeight);
    });

    // find closest dot position to center of activeItem
    const closestDot = dottedItemPositionList?.reduce((a, b) => {
        return Math.abs(b - activeItemPosition) < Math.abs(a - activeItemPosition) ? b : a;
    });

    // return shift of block with items
    const dotRadius = 8;
    return activeItemPosition - closestDot - dotRadius;
};

export default calculateShift;