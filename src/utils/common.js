/**
 * Created by wxw on 18-5-29.
 */
export function responseResize(chartInstance, scale) {
    window.addEventListener('resize', () => {
        setTimeout(() => {
            let height = parseFloat(document.querySelector('html').style['font-size'].replace(/px$/, ''));
            chartInstance.resize({
                height: height * scale
            });
        }, 100);
    }, false);
}

export function multiResponseResize(multiChartInstance, scale) {
    window.addEventListener('resize', () => {
        setTimeout(() => {
            let height = parseFloat(document.querySelector('html').style['font-size'].replace(/px$/, ''));
            multiChartInstance.forEach((item) => {
                item.resize({
                    height: height * scale
                });
            });
        }, 100);
    }, false);
}
