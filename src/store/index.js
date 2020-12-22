import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            clann:[
            {
                id: 'c1', 
                name: 'Anabelle Mary Snook',
                dob: '26-Aug-2005', 
                hobbies:['colouring','reading','arts and crafts'], 
                image:'https://image.flaticon.com/icons/png/512/146/146005.png'
            },
            {
                id: 'c2', name: 'Lucy Marie Snook', dob: '06-Dec-2008',hobbies:['dolls','makeup','hairdressing'], image:'https://image.flaticon.com/icons/png/512/186/186037.png'
            },
            {
                id: 'c3', name: 'Vicky Marie Snook', dob: '08-Dec-1896',hobbies:['gin','netflix','naps'], image:'https://image.flaticon.com/icons/svg/163/163846.svg'
            },
            ]
        }
    },
    getters: {
        clann(state) {
            return state.clann
        },
        person(state) {
            return (personId) => {
                return state.clann.find(clann => clann.id === personId)
            }
        }

    }
})

export default store;