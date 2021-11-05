import {run} from './app/app'
import {AlertService} from './app/alert_service'
import {ComponentService} from './app/component_service'

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);