new Vue({
  el: '#app',
  data: {
    text: '',
    words: [],
  },
  methods: {
    makeWordList: function () {
      this.words = [];
      const str = this._removeSymbol(this.text);
      const lowerCaseStr = str.toLowerCase();
      const wordList = this._split(lowerCaseStr)
      wordList.sort();
      const setWordList = new Set(wordList);
      setWordList.forEach(word => {
        const item = {
          word: '',
          count: 0,
        }
        item.word = word;
        this.words.push(item);
      });
      wordList.forEach((word) => {
        const index = this.words.findIndex((item) => {
          return item.word === word
        });
        this.words[index].count += 1;
      })
      // this.text = '';
    },
    _removeSymbol: function (str) {
      return str
        .replace(/[^a-zA-Z]/g, ' ');
    },
    _split: function (str) {
        return str.split(' ').filter((word) => {
        return word !== "" && isNaN(word);
      });
    },
    formReset: function () {
      this.text = ''
      this.makeWordList();
    }
  },
})
