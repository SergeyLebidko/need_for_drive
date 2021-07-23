import stateMapsFactory from './stateMaps';
import dispatchMapsFactory from './dispatchMaps';
import {connect} from 'react-redux';

export function createStoreConnectedComponent(componentName) {
    let stateMap = stateMapsFactory(componentName);
    let dispatchMap = dispatchMapsFactory(componentName);
    return connect(stateMap, dispatchMap)
}