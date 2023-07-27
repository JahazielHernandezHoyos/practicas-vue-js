<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex items-center justify-between w-full mb-4">
            <button @click="previousMonth"
                class="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 011-1h3l-4-4-4 4h3a1 1 0 011 1z" />
                </svg>
            </button>
            <h2 class="text-lg font-medium">{{ month }}</h2>
            <button @click="nextMonth"
                class="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 011-1h3l-4-4-4 4h3a1 1 0 011 1z" />
                </svg>
            </button>
        </div>
        <div class="grid grid-cols-7 gap-2 mb-4">
            <div v-for="day in days" :key="day" class="text-center text-gray-500 text-sm font-medium">
                {{ day }}
            </div>
        </div>
        <div class="grid grid-cols-7 gap-2">
            <div v-for="date in dates" :key="date" class="text-center text-gray-700 text-lg font-medium" :class="{
                'text-gray-400': !date,
                'bg-gray-200 rounded-md': isToday(date),
            }">
                {{ date }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CalendarComponent",
    data() {
        return {
            currentDate: new Date(),
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dates: [],
        };
    },
    computed: {
        month() {
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            return months[this.currentDate.getMonth()];
        },
    },
    methods: {
        previousMonth() {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.generateDates();
        },
        nextMonth() {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.generateDates();
        },
        generateDates() {
            const year = this.currentDate.getFullYear();
            const month = this.currentDate.getMonth();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const firstDay = new Date(year, month, 1).getDay();
            const lastDay = new Date(year, month, daysInMonth).getDay();
            const dates = [];
            for (let i = 1; i <= daysInMonth; i++) {
                dates.push(i);
            }
            if (firstDay !== 0) {
                for (let i = 0; i < firstDay; i++) {
                    dates.unshift("");
                }
            }
            if (lastDay !== 6) {
                for (let i = lastDay; i < 6; i++) {
                    dates.push("");
                }
            }
            this.dates = dates;
        },
        isToday(date) {
            const today = new Date();
            return (
                this.currentDate.getMonth() === today.getMonth() &&
                this.currentDate.getFullYear() === today.getFullYear() &&
                date === today.getDate()
            );
        },
    },
    mounted() {
        this.generateDates();
    },
};
</script>

<style scoped>
@media (min-width: 640px) {
    .grid {
        grid-template-columns: repeat(7, minmax(0, 1fr));
    }
}
</style>