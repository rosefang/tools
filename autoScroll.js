/**
 * 开始滚动，知道高度不再增加
 * @param {*} scroller
 * @param {*} step
 * @returns
 */
async function StartScroll(scroller, step) {
    return new Promise((resolve) => {
        let top = 0;
        const timeId = setInterval(() => {
            top += step;
            scroller.scrollTop = top;
            if (scroller.scrollTop + scroller.clientHeight === scroller.scrollHeight) {
                clearInterval(timeId);
                return resolve('stop');
            }
        }, 50);
    });
}

/**
 * 自动滚动
 * @param {*} scroller 滚动条
 * @param {*} step 步频
 * @param {*} times 次数
 */
async function AutoScroll(scroller, step, times) {
    for (let i = 0; i < times; i++) {
        await StartScroll(scroller, step);
    }
}

/**
 * 是否是移动端
 * @returns
 */
function isMobile() {
    return /(mobile)/i.test(navigator.userAgent) || /(android)/i.test(navigator.userAgent);
}

/**
 * 得到滚动条
 * @returns scroller
 */
function getScroller() {
    let scroller;
    // 这里去获取滚动的节点
    return scroller;
}

/**
 * 入口函数
 */
function start() {
    setTimeout(async () => {
        const scroller = getScroller();
        const startTime = Date.now();
        await AutoScroll(scroller, 80, 1);
        console.log('------scroll takes time-------', `${(Date.now() - startTime) / 1000}s`);
    }, 5000);
}

console.log('------scroll will start after 5s-------');
start();
