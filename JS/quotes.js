const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        name: "-Walt Disney"
    },

    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        name: "-Eleanor Roosevelt"
    },

    {
        quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        name: "-John Lennon"
    },

    {
        quote: "You must be the change you wish to see in the world.",
        name: "-Mahatma Gandhi"
    },

    {
        quote: "The only thing we have to fear is fear itself. ",
        name: "-Franklin D. Roosevelt"
    },

    {
        quote: "We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard",
        name: "-John F. Kennedy"
    },

    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        name: "-Dr. Seuss"
    },

    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        name: "-Babe Ruth"
    },

    {
        quote: "The only impossible journey is the one you never begin.",
        name: "-Tony Robbins"
    },

    {
        quote: "If you want to make your dreams come true, the first thing you have to do is wake up.",
        name: "-J.M. Power"
    }
]

const quote = document.querySelector(".quotes span:nth-child(1)")
const nam = document.querySelector(".quotes span:nth-child(2)")

const random = quotes[Math.floor(Math.random() * quotes.length)]
quote.innerText = random.quote;
nam.innerText = random.name;