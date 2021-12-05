# BerlinClock

## Introduction
This repository holds an app that is displaying the current time in the style of the 'Berlin Clock'. This app has
been implemented as an assessment by a company during their application process. Therefore, there have been some
restrictions to the process of creating this app:

1. There should not be used any 3rd party library to implement the logic behind the clock. 
2. It was encouraged to align to the company's tech stack, which means that the app would be realized with [Angular](https://angular.io/).
3. There should put a focus on creating 'clean code'

Further restriction applied can be found under [Additional information](#additional-information).

To have a look at the result, you can either check out this repository and start the application, or you have
a look at the [App](https://berlinclock-e5738.web.app/) I deployed via [Google Firebase](https://firebase.google.com/). 

## What is the 'Berlin Clock'?
The 'Berlin Clock' is a clock that tells the time by a distinct set of illuminated fields. The seconds are displayed 
by a round yellow circle at the top, the minutes by rectangles at the bottom and the hours likewise by rectangles in 
between. 

Aside from the seconds, which are only displayed as being even ('off') or odd ('on'), the other indicators
follow a more complex scheme: The hours are divided into four fields standing for an hourly value to the base of five 
and four fields that represent a value to the base of one. With combinations between these eight red colored fields, 
all possible 24 hours of a day can be displayed. 

The minutes are displayed in a similar way: Eleven alternating colored fields indicate values to the base of five and 
four yellow colored fields represent values to the base of one. The alternating colored fields are yellow with every
third field being red colored as an accent. With combinations between these fields all possible 60 minutes of an hour 
can be displayed.

You can find more information on the [Wikipedia Page](https://en.wikipedia.org/wiki/Mengenlehreuhr) for this clock.

## Additional information

In this section you find some questions and answers to gain a bit more insight why some parts of this assessment
have been implemented in a certain way. 

#### Why did you set up a [Nx](https://nx.dev/) project and not a plain angular app?
I am used to working with Nx and Nx provides an out-of-the-box support for [jest](https://jestjs.io/), which I prefer 
over [jasmine](https://jasmine.github.io/).

#### Why don't you apply to the [Nx](https://nx.dev/) conventions and write your code inside the app and not inside one or more libraries?
The company I did this assessment for does not use [Nx](https://nx.dev/), so I wanted stay as close to a 'vanilla' Angular app
as possible and a multi-library-structure would not have suited this target.

#### Why did you use [commitizen](https://commitizen-tools.github.io/commitizen/)?
I am a fan of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and commitizen is a quick and easy way 
to support me to stick to the conventions.

#### Why did you use [bootstrap](https://getbootstrap.com/)?
I am used to designing my UI with bootstrap and this helps me to save time in the assessment.

#### Why did you not use XY, why did you not write XY, ... ?
There is a ton of questions this point should cover, like 'Why did you not write E2E-Test?' or 'Why did you not
use tailwindcss instead of bootstrap?' and - apart from sometimes obvious reasons - it all boils down to the time
I had to create this assessment. Although there was no *real* time limit, like 'Do not take more than 4 hours', it
is still just an assessment that has a certain scope. So I decided to set my own definition of done and focused on using
the technology I am familiar with to reach this goal.

#### Will you expand this app in the future?
Possibly. To be honest, I'm not quite sure right now.

## Useful links

* [The hosted App](https://berlinclock-e5738.web.app/)
* [Angular](https://angular.io/)
* [Nx Documentation](https://nx.dev/angular)
* [Google Firebase](https://firebase.google.com/)
* [commitizen](https://commitizen-tools.github.io/commitizen/)
* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
* [jest](https://jestjs.io/)
* [jasmine](https://jasmine.github.io/)
* [bootstrap](https://getbootstrap.com/)
