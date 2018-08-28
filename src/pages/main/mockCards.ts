export const test = {
    id: 'id',
    description: '-Прошу пройти за мной - грубо сказал полквоник.\nОтойдя в сторону он спросил:\n-Откуда ты тут взялся?',
    title: 'Полковник',
    yes: 'С деревни неподалёку',
    no: 'Я ничего не помню',
    image: 'https://static.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg',
    onlyText: false,
    answerParam: {
        yes: {
            health: 1,
            psycho: 1,
            karma: 1,
            nextCard: '',
        },
        no: {
            health: 1,
            psycho: 1,
            karma: 1,
            nextCard: '',
        }
    }
}

export const cards = {
    first: {
        id: 'first',
        description: 'Гробовщик осмотрел тебя, немного помолчал и спросил:<br>-Уже поздно, можешь остаться у меня дома на ночь.',
        title: 'Гробовщик',
        yes: 'Простите, но нет',
        no: 'С радостью',
        image: '../../assets/imgs/cards/test1.png',
        onlyText: false,
        answerParam: {
            yes: {
                health: 1,
                psyche: 1,
                karma: 1,
                nextCard: 'second',
            },
            no: {
                health: 1,
                psyche: 1,
                karma: 1,
                nextCard: 'second',
            }
        }
    },
    second: {
        id: 'second',
        description: '-Прошу пройти за мной - грубо сказал полквоник<br>Отойдя в сторону он спросил:<br>-Откуда ты тут взялся?',
        title: 'Полковник',
        yes: 'С деревни неподалёку',
        no: 'Я ничего не помню',
        image: '../../assets/imgs/cards/test2.png',
        onlyText: false,
        answerParam: {
            yes: {
                health: 1,
                psyche: 1,
                karma: 1,
                nextCard: 'first',
            },
            no: {
                health: 1,
                psyche: 1,
                karma: 1,
                nextCard: 'first',
            }
        }
    },
}