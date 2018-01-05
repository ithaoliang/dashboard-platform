import modules_analysis from './view/analysis/routes.js';
import modules_behaviour_analysis from './view/behaviour_analysis/routes.js';
import modules_home from './view/home/routes.js';
import modules_new_behaviour from './view/new_behaviour/routes.js';
export default [].concat(
    modules_analysis,
    modules_behaviour_analysis,
    modules_home,
    modules_new_behaviour
);
