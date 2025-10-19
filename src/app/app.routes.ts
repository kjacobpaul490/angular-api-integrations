import { Routes } from '@angular/router';
import { LoginPage } from './login/login-page/login-page';
import { Layout } from './layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Todo } from './pages/todo/todo';
import { Analytics } from './pages/analytics/analytics';

export const routes: Routes = [
    { path: '', redirectTo: '/login-page', pathMatch: 'full' },
    { path: 'login-page', component: LoginPage },
    {
        path: 'pages',
        component: Layout,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard },
            { path: 'todo', component: Todo },
            { path: 'analytics', component: Analytics }
        ]
    }
];
