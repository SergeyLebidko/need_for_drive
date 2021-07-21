import stateMapsFactory from './stateMaps';
import dispatchMapsFactory from './dispatchMaps';
import {connect} from 'react-redux';

export function createStoreConnectedComponent(component) {
    let componentName = component.name;
    let stateMap = stateMapsFactory(componentName);
    let dispatchMap = dispatchMapsFactory(componentName);
    return connect(stateMap, dispatchMap)(component)
}