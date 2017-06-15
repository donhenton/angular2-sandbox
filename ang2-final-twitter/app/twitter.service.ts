


import { Injectable } from '@angular/core';

/**
 * import { Injectable } from '@angular/core';
 */
@Injectable()
export default class TwitterService
{
    constructor()
    {

    }

    private getUrl()
    {
        let t = Math.floor((Math.random() * 10000) + 1);
        return "http://lorempixel.com/100/100/people?"+t;
    }

    getTwitterPosts(): object
    {
        let posts = [];
        
        posts.push({
            username: 'bonzo',
            handle: '@bonzodog',
            text: 'you know you love him, woof!!!',
            url: this.getUrl(),
            count: 10

        })
        posts.push({
            username: 'vlad baby',
            handle: '@vladtheimpaler',
            text: 'hmmmmm, garlic!!',
            url: this.getUrl(),
            count: 6

        })
        posts.push({
            username: 'burkenHare',
            handle: '@BurkeAndHare',
            text: 'whats wrong with Abby Normal?',
            url: this.getUrl(),
            count: 22

        })


        return posts;
    }
}