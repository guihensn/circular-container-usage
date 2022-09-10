import { CircleAlignerFactory } from './modules/circular-container/js/factories/circle-aliner-factory.js'
import { CircleSpreaderFactory } from './modules/circular-container/js/factories/circle-spreader-factory.js'

let circleAlignerFactory = new CircleAlignerFactory();
let circleSpreaderFactory = new CircleSpreaderFactory();

alignerExamples('#aligner-1', 0, 0);
alignerExamples('#aligner-2', 3*Math.PI/4, 5*Math.PI/180);
alignerExamples('#aligner-3', 0, 0);

spreaderExamples('.examples', 0, 2*Math.PI);
spreaderExamples('#title', 0, Math.PI)

function alignerExamples(tag, phase, gap){
    let alignerEl = document.querySelector(tag);
    circleAlignerFactory.make(alignerEl, phase, gap);
}

function spreaderExamples(tag, phase, distribution){
    let spreaderEl = document.querySelector(tag);
    circleSpreaderFactory.make(spreaderEl , phase, distribution);
}