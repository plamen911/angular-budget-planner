import {AuthService} from './authentication/auth.service';
import {BudgetPlannerService} from './budget-planner.service';
import {MessageService} from './message.service';
import {RemoteService} from './remote.service';

export const allServices = [AuthService, BudgetPlannerService, MessageService, RemoteService];
