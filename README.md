# Установка

Опции для Widget

```
type ConfigType = {
  btnColor?: string;
  backgoundColor?: string;
  title?: string;
  description?: string;
  selector: string;
};
```

Если selector не задан, то покажется alert с описанием ошибки

Если selector задан, но его нет на странице, то создается div с этим параметром и туда монтируется виджет
<br/>
<br/>
<br/>

# Для разработки

Клонируем репу

```
 git clone https://github.com/Aleksei2507/widget
```

Переходим в папку с репой и вызываем комманду

```
  yarn install
```

Для разработки использовать комманду

```
  yarn dev
```

Для сборки проекта

```
  yarn build
```

На выходе получим в папке dist два файла, index.html, Widget.js

Открываем index.html в браузере и можно тестировать
