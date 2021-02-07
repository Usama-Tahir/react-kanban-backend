export const systemName = 'kanban';

export enum nodeEnv {
  PRODUCTION = 'production',
  PROVISION = 'provision',
  INSPECTION = 'inspection',
  TEST = 'test',
  DEVELOPMENT = 'development',
}

export const swaggerOptions = {
  customCss: '.swagger-ui .topbar { display: none }',
  customCssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-flattop.css',
};

export const cardsState: string[] = ['todo', 'inprogress', 'done'];

export const enum CardsStateEnum {
  TODO = 'todo',
  INPROGRESS = 'inprogress',
  DONE = 'done',
}

export const hourlyRate = 10;

export const currency = 'usd';
