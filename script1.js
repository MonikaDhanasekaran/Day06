class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
    getPG(){
        return "The rating of the Movie is"+" "+this.rating;
    }
    set changename(m){
        this.rating=m;
    }
}
var CasinoRoyale = new Movie('Casino Royale','EON Productions','PG');
CasinoRoyale.changename="PG13";
console.log(CasinoRoyale);