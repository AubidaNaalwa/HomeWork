import axios from 'axios'
import { observable, action, makeObservable, computed } from 'mobx'


class DictionaryStore {
    constructor() {
        this.Dictionary = []
        makeObservable(this, {
            Dictionary: observable,
            numberOfWordsIncludesLetter: action,
            addingToDictionary: action,
            numberOfWordsEndsWith: action,
            numberOfWordsStartWith: action,
            loadfromDB: action
        })
    }

    addingToDictionary = async (input) => {
        await axios.post('/Word', { word: input })
    }

    numberOfWordsStartWith = (input) => {
        let count = 0;
        this.Dictionary.forEach(value => {
            value.word.startsWith(input) && count++
        })
        return count
    }

    numberOfWordsIncludesLetter = (input) => {
        let count = 0;
        this.Dictionary.forEach(value => {
            value.word.includes(input) && count++
        })
        return count
    }

    numberOfWordsEndsWith = (input) => {
        let count = 0;
        this.Dictionary.forEach(value => {
            value.word.endsWith(input) && count++
        })
        return count
    }

    numberOfWordsRepeatedLetter = () => {
        let count = 0;
        this.Dictionary.forEach(value => {
            for (let i = 0; i < value.word.length-1; i++) {
                if (value.word.indexOf(value.word[i]) === value.word.indexOf(value.word[i+1])) {
                    return count++
                }
            }
        })
        return count
    }

    loadfromDB = async () => {
        try {
            const response = await axios.get('/words')
            this.Dictionary = response.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default DictionaryStore