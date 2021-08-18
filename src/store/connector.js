import stateMapsFactory from './stateMaps';
import dispatchMapsFactory from './dispatchMaps';
import {connect} from 'react-redux';

export function createStoreConnectedComponent(componentName) {
    const stateMap = stateMapsFactory(componentName);
    const dispatchMap = dispatchMapsFactory(componentName);
    return connect(stateMap, dispatchMap)
}