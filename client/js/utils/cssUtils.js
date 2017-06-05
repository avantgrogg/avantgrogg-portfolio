import { sample } from 'lodash';

export function getRandomBackground() {
    return sample(['is-purple', 'is-green', 'is-blue']);
}