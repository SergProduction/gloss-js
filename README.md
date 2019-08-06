## gloss js

### функциональная декларативная библиотека для работы с 2d канвасом


### render functions
```javascript
// @flow
type Point = {x: number, y: number}

type Path = array<Path>

type Picture = Symbol

type Shape = Symbol
```

```javascript
// line :: Path -> Shape
// line = t('path')
declare function line(Path): Shape
```
рисует непрерывную линию по координатным точкам


```javascript
// rect :: Int -> Int -> Int -> Int -> Shape
// rect = t('x', 'y', 'width', 'height')
declare function rect(number, number, number, number): Shape
```
рисует квадрат (аналогичный метод ctx.rect)


```javascript
// circle :: Int -> Int -> Int -> Shape
// circle = t('x', 'y', 'radius')
declare function circle(Path): Shape
```
рисует круг в точке x, y с заданным радиусом


```javascript
// arc :: Int -> Int -> Int -> Int -> Int -> Bool -> Shape
// arc = t('x', 'y', 'radius', 'startAngle', 'endAngle', 'anticlockwise')
declare function arc(number, number, number, number, number, number): Shape
```
рисует дугу (аналогичный метод ctx.arc)


```javascript
// pictures :: [Shape] -> Picture
// pictures = t('shapes')
declare function pictures(Array<Shape>): Picture
```
все методы для рисования возращают фигуру (Shape), функция picture принимает массив фигур и возращает как бы слой в который собраны все фигуры


```javascript
// shape :: Picture -> Shape
// shape = t('picture')
declare function shape(Array<Picture>): Shape
```
принмиает слой фигур (Picture) и объеденяет их в одну фигуру, чтоб например можно было потом покрасить все в один цвет



```javascript
// color :: String -> Shape -> Shape
// color = t('color', 'shape')
declare function color(string, Shape): Shape
```
цвет заливки

```javascript
// border :: String -> Shape -> Shape
// border = t('color', 'shape')
declare function border(string, Shape): Shape
```
цвет границ

### game play
```javascript
/*
data CanvasSetting = {
  canvas :: HTMLCanvasElement
  width :: Int
  height :: Int
}

type FPS = Int

type EventName  = String

play :: CanvasSetting
    -> FPS
    -> State
    -> (State -> Picture)
    -> (EventName -> Event -> State -> State)
    -> (FPS -> State -> State)
    -> [EventName]
    -> IO String
*/
declare function play<State>(
  {
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
  },
  number,
  State,
  (State) => Picture,
  (string, State, Event) => State,
  (number, State) => State,
  Array<[string]>
): void
```

Функция play запускает анимацию, принимает
1. канвас с его размерами
2. частота кадров с которой должна обновлятся анимация
3. начальное состояние приложения
4. функция рендера, которая получает состояние и должно вернуть элементы рендеринга
5. фунция для трансформации состояние, вызывается при срабатываниии событий браузера, таких как mousemove и т. п. В функция принимает первым параметром названия события на которое можно подписаться, вторым сам евент
6. функция которая срабатывает каждый тик обновления анимациию
7. список событий браузера на которые необходимо подписаться