import { renderHeaderTitle } from '../../utils/render';

const EXPECTED_RECT_COUNT = 101;
const DEFAULT_SHAPE_SIDE = 20;
const DEFAULT_COLOR = 'red'; // 'rgba(255,0,0,0.5)';

/*
 * WARNING : THE STROBOSCOPIC EFFECT OF THIS DEMO COULD LEAD TO EPILEPSY !!!
 * PLEASE DON'T EXECUTE THIS DEMO IF YOUR ARE SUBJECT TO EPILEPSY !
*/

const HomePage = () => {
  const main = document.querySelector('main');
  const mainWidth = main.clientWidth;
  const mainHeight = main.clientHeight;

  let canvas;
  let canvasContext;

  let animationId;
  let animated = true;
  let animatedColor = DEFAULT_COLOR;
  const squareSize = DEFAULT_SHAPE_SIDE;

  renderHeaderTitle('Canvas Animation');
  renderCanvasWrapper();
  setCanvasContextAndSize();
  removePotentialVerticalAndHorizontalScrollbars();
  requestAnimationFrame(drawOneFrame);

  canvas.addEventListener('click', () => {
    animated = !animated;
    if (!animated) {
      cancelAnimationFrame(animationId);
    } else {
      animationId = requestAnimationFrame(drawOneFrame);
    }
  });

  main.addEventListener('contextmenu', onRighClick);

  function renderCanvasWrapper() {
    main.innerHTML = '<canvas />';
    canvas = document.querySelector('canvas');
  }
  function setCanvasContextAndSize() {
    canvasContext = canvas.getContext('2d');
    canvas.width = mainWidth;
    canvas.height = mainHeight;
  }

  /**
   * This function remove the vertical scrollbar that spuriously appears
   * even though the canvas is not meant to extend beyond the height
   * of the browser windows.
   */
  function removePotentialVerticalAndHorizontalScrollbars() {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
  }

  function drawOneFrame() {
    clearFrame();

    drawRectanglesAtRandomLocations();
    // drawAlwaysFullRectanglesAtRandomLocations();

    // requestAnimationFrame(drawOneFrame);
    animationId = requestAnimationFrame(drawOneFrame);

    // requestAnimationFrame(() => setTimeout(drawOneFrame, 1000));
  }

  function clearFrame() {
    canvasContext.clearRect(0, 0, mainWidth, mainHeight);
  }

  function drawRectanglesAtRandomLocations() {
    canvasContext.fillStyle = animatedColor;

    for (let i = 0; i < EXPECTED_RECT_COUNT; i += 1) {
      canvasContext.fillRect(
        Math.random() * mainWidth,
        Math.random() * mainHeight,
        squareSize,
        squareSize,
      );
    }
  }

  function onRighClick(event) {
    event.preventDefault();
    animatedColor = getRandomColorAsString();
  }

  function getRandomColorAsString() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const alpha = Math.random();

    return `rgba(${red},${green},${blue},${alpha})`;
  }
};

export default HomePage;
