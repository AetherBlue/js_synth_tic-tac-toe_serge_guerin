Vue.componentExterne("welcome", {
    data: function () {
        return {
           
        }
    },
    methods: {
        
    },
    template: "components/welcome.html",
})

Vue.componentExterne("game", {
    data: function () {
        return {
            c11_xo: null,
            c12_xo: null,
            c13_xo: null,
            c21_xo: null,
            c22_xo: null,
            c23_xo: null,
            c31_xo: null,
            c32_xo: null,
            c33_xo: null,

            win_x: ["X", "X", "X"],
            win_o: ["O", "O", "O"],

            tour: "X",
            turn: true,
            game_over: false,
            draw: false,
            grille: [null, null, null, null, null, null, null, null, null],
            
        }
    },
    methods: {
        case_11_click: function () {
            if(this.c11_xo == null) {
                if(this.turn == true) {
                    this.c11_xo = "X"
                    this.grille[0] = "X"
                } else {
                    this.c11_xo = "O"
                    this.grille[0] = "O"
                }     
                this.turn = !this.turn              
            }

            // console.log("11-clicked!!!")
            // console.log(this.c11_xo)
            this.verify()
            // console.log(this.turn)


        },
        case_12_click: function () {
            if(this.c12_xo == null) {
                if(this.turn == true) {
                    this.c12_xo = "X"
                    this.grille[1] = "X"
                } else {
                    this.c12_xo = "O"
                    this.grille[1] = "O"
                }     
                this.turn = !this.turn
            }
            this.verify()
            // console.log(this.turn)
            // console.log("12-clicked!!!")
        },
        case_13_click: function () {
            if(this.c13_xo == null) {
                if(this.turn == true) {
                    this.c13_xo = "X"
                    this.grille[2] = "X"
                } else {
                    this.c13_xo = "O"
                    this.grille[2] = "O"
                }     
                this.turn = !this.turn
            }
            this.verify()
            // console.log("13-clicked!!!")
        },
        case_21_click: function () {
            if(this.c21_xo == null) {
                if(this.turn == true) {
                    this.c21_xo = "X"
                    this.grille[3] = "X"
                } else {
                    this.c21_xo = "O"
                    this.grille[3] = "O"
                }     
                this.turn = !this.turn
            }
            this.verify()
            // console.log("21-clicked!!!")
        },
        case_22_click: function () {
            if(this.c22_xo == null) {
                if(this.turn == true) {
                    this.c22_xo = "X"
                    this.grille[4] = "X"
                } else {
                    this.c22_xo = "O"
                    this.grille[4] = "O"
                }     
                this.turn = !this.turn
            }
            this.verify()
            // console.log("22-clicked!!!")
        },
        case_23_click: function () {
            if(this.c23_xo == null) {
                if(this.turn == true) {
                    this.c23_xo = "X"
                    this.grille[5] = "X"
                } else {
                    this.c23_xo = "O"
                    this.grille[5] = "O"
                }     
                this.turn = !this.turn
            }
            this.verify()
            // console.log("23-clicked!!!")
        },
        case_31_click: function () {
            if(this.c31_xo == null) {
                if(this.turn == true) {
                    this.c31_xo = "X"
                    this.grille[6] = "X"
                } else {
                    this.c31_xo = "O"
                    this.grille[6] = "O"
                }     
                this.turn = !this.turn
            }
            this.verify()
            // console.log("31-clicked!!!")
        },
        case_32_click: function () {
            if(this.c32_xo == null) {
                if(this.turn == true) {
                    this.c32_xo = "X"
                    this.grille[7] = "X"
                } else {
                    this.c32_xo = "O"
                    this.grille[7] = "O"
                }     
                this.turn = !this.turn
            }
            this.verify()
            // console.log("32-clicked!!!")
        },
        case_33_click: function () {
            if(this.c33_xo == null) {
                if(this.turn == true) {
                    this.c33_xo = "X"
                    this.grille[8] = "X"
                } else {
                    this.c33_xo = "O"
                    this.grille[8] = "O"
                }     
                this.turn = !this.turn
            }
            this.verify()
            // console.log("33-clicked!!!")
        },

        
        verify: function () {

            // Montrer à qui le tour...
            if (this.turn == true) {
                this.tour = "X"
            } else {
                this.tour = "O"
            }

            if(this.grille[0] == "X" && this.grille[1] == "X" && this.grille[2] == "X" ) {
                this.game_over = true
                this.winner = "X"
                
                this.end_game()
            } else if (this.grille[0] == "O" && this.grille[1] == "O" && this.grille[2] == "O" ) {
                this.game_over = true
                this.winner = "O"
                
                this.end_game()
            } else if(this.grille[3] == "X" && this.grille[4] == "X" && this.grille[5] == "X" ) {
                this.game_over = true
                this.winner = "X"
                
                this.end_game()
            } else if (this.grille[3] == "O" && this.grille[4] == "O" && this.grille[5] == "O" ) {
                this.game_over = true
                this.winner = "O"
               
                this.end_game()
            } else if(this.grille[6] == "X" && this.grille[7] == "X" && this.grille[8] == "X" ) {
                this.game_over = true
                this.winner = "X"
               
                this.end_game()
            } else if (this.grille[6] == "O" && this.grille[7] == "O" && this.grille[8] == "O" ) {
                this.game_over = true
                this.winner = "O"
                
                this.end_game()
            } else if(this.grille[0] == "X" && this.grille[3] == "X" && this.grille[6] == "X" ) {
                this.game_over = true
                this.winner = "X"
                
                this.end_game()
            } else if (this.grille[0] == "O" && this.grille[3] == "O" && this.grille[6] == "O" ) {
                this.game_over = true
                this.winner = "O"
                
                this.end_game()
            } else if(this.grille[1] == "X" && this.grille[4] == "X" && this.grille[7] == "X" ) {
                this.game_over = true
                this.winner = "X"
                
                this.end_game()
            } else if (this.grille[1] == "O" && this.grille[4] == "O" && this.grille[7] == "O" ) {
                this.game_over = true
                this.winner = "O"
                
                this.end_game()
            } else if(this.grille[2] == "X" && this.grille[5] == "X" && this.grille[8] == "X" ) {
                this.game_over = true
                this.winner = "X"
                
                this.end_game()
            } else if (this.grille[2] == "O" && this.grille[5] == "O" && this.grille[8] == "O" ) {
                this.game_over = true
                this.winner = "O"
               
                this.end_game()
            } else if(this.grille[0] == "X" && this.grille[4] == "X" && this.grille[8] == "X" ) {
                this.game_over = true
                this.winner = "X"
               
                this.end_game()
            } else if (this.grille[0] == "O" && this.grille[4] == "O" && this.grille[8] == "O" ) {
                this.game_over = true
                this.winner = "O"
                
                this.end_game()
            } else if(this.grille[2] == "X" && this.grille[4] == "X" && this.grille[6] == "X" ) {
                this.game_over = true
                this.winner = "X"
                
                this.end_game()
            } else if (this.grille[2] == "O" && this.grille[4] == "O" && this.grille[6] == "O" ) {
                this.game_over = true
                this.winner = "O"
               
                this.end_game()
            } else if (this.grille[0] != null && 
                       this.grille[1] != null &&
                       this.grille[2] != null &&
                       this.grille[3] != null &&
                       this.grille[4] != null &&
                       this.grille[5] != null &&
                       this.grille[6] != null &&
                       this.grille[7] != null &&
                       this.grille[8] != null     ) {
    
                this.draw = true
                this.game_over = true

                this.end_game()
                
                
            }
           
        },
        
        end_game: function () {
            if(this.winner != null) {
                console.log("The winner is: " + this.winner)
            } else if(this.draw == true) {
                console.log("The game is a draw!")
            }

            console.log("Game Over is: " + this.game_over)
            
            this.$emit("fin")

            // on reinitialise les variables
            for(let i = 0; i <= 8; i++) {
                this.grille[i] = null
            }

            this.c11_xo = null
            this.c12_xo = null
            this.c13_xo = null
            this.c21_xo = null
            this.c22_xo = null
            this.c23_xo = null
            this.c31_xo = null
            this.c32_xo = null
            this.c33_xo = null

            console.log(this.grille)
            console.log(this.c11_xo)
            console.log(this.c12_xo)
            console.log(this.c13_xo)
            console.log(this.c21_xo)
            console.log(this.c22_xo)
            console.log(this.c23_xo)
            console.log(this.c31_xo)
            console.log(this.c32_xo)
            console.log(this.c33_xo)


            return
        },
    },
    template: "components/game.html"
})

Vue.componentExterne("winner", {
    data: function () {
        return {
           
        }
    },
    methods: {

    },
    template: "components/winner.html",
})

new Vue({
    el: "#app",
    data: {
        play_clicked: false,
        game_on: false,
        game_ended: false,
        
        replay_screen: false,
        replay_clicked: false,
        
        winner: null,

    },
    methods: {
        play: function () {
            this.play_clicked = true
            this.game_on = true
            // console.log("Ok let's play!")
            // console.log(this.play_clicked)
        },
        
        init_game: function() {
            this.game_on = false
            this.replay_screen = true
        },

        replay: function () {
            this.replay_clicked = true
            this.game_on = true
        },
    },
    created: function () {
        this.play_clicked = false
        // console.log(this.play_clicked)
    }
})