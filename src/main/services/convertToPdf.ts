import 'jsdom-global/register';
import { ApollonEditor, SVG, UMLModel } from '@ls1intum/apollon';

/**
 * Gets an uml model of apollon and returns svg of it
 *
 * @param model
 * @returns an svg object with svg string and bounds
 */
const convertToSvg = (model: UMLModel): SVG => {
  //@ts-ignore
  document.body.innerHTML = '<!doctype html><html><body><div></div></body></html>';

  //JSDOM does not support getBBox so we have to mock it here
  //@ts-ignore
  window.SVGElement.prototype.getBBox = () => ({
    x: 0,
    y: 0,
    width: 10,
    heigth: 10,
  });

  //@ts-ignore
  const container = document.querySelector('div');

  const editor = new ApollonEditor(container, {});

  editor.model = model;

  const svg: SVG = editor.exportAsSVG();

  return svg;
};

export default convertToSvg;
