const app = Vue.createApp({
    data() {
        return {
            courseGoals: 'finish of this course',
            link: 'https://www.facebook.com/'
        };
    },
    method: {
        outPutGoal() {
            const randomNum = math.random()
            if (randomNum < 0.5) {
                return "try to finish"
            } else {
                return "please continue you course"
            };
        }
    }
});
app.mount('#user-goal')