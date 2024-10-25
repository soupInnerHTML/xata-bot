# Базовый образ Node.js
FROM node:18

# Устанавливаем yarn
RUN corepack enable

# Рабочая директория в контейнере
WORKDIR /usr/src/app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем весь проект
COPY . .

# Порт, который использует Railway (например, 3000)
EXPOSE 3000

# Команда для запуска бота
CMD ["yarn", "prod"]
