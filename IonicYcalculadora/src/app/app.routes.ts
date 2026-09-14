import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'accordion',
    loadComponent: () => import('./accordion/accordion.page').then( m => m.AccordionPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'badge',
    loadComponent: () => import('./badge/badge.page').then( m => m.BadgePage)
  },
  {
    path: 'breadcrumbs',
    loadComponent: () => import('./breadcrumbs/breadcrumbs.page').then( m => m.BreadcrumbsPage)
  },
  {
    path: 'button',
    loadComponent: () => import('./button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.page').then( m => m.CardPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'chip',
    loadComponent: () => import('./chip/chip.page').then( m => m.ChipPage)
  },
  {
    path: 'content',
    loadComponent: () => import('./content/content.page').then( m => m.ContentPage)
  },
  {
    path: 'datetime',
    loadComponent: () => import('./datetime/datetime.page').then( m => m.DatetimePage)
  },
  {
    path: 'fab',
    loadComponent: () => import('./fab/fab.page').then( m => m.FabPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'icon',
    loadComponent: () => import('./icon/icon.page').then( m => m.IconPage)
  },
  {
    path: 'infinite-scroll',
    loadComponent: () => import('./infinite-scroll/infinite-scroll.page').then( m => m.InfiniteScrollPage)
  },
  {
    path: 'input',
    loadComponent: () => import('./input/input.page').then( m => m.InputPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./list/list.page').then( m => m.ListPage)
  },
  {
    path: 'media',
    loadComponent: () => import('./media/media.page').then( m => m.MediaPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'tabs-comp',
    loadComponent: () => import('./tabs-comp/tabs-comp.page').then( m => m.TabsCompPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'toggle',
    loadComponent: () => import('./toggle/toggle.page').then( m => m.TogglePage)
  },
  {
    path: 'toolbar',
    loadComponent: () => import('./toolbar/toolbar.page').then( m => m.ToolbarPage)
  },
  {
    path: 'typography',
    loadComponent: () => import('./typography/typography.page').then( m => m.TypographyPage)
  },
];
