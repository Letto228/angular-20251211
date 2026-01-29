import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {App} from './app/app';
import {inject, Injectable, InjectionToken, Injector} from '@angular/core';

bootstrapApplication(App, appConfig).catch(err => console.error(err));

function testInjector() {
    // bad practics
    // const token = 123;
    // const token = 'str';
    // const token = true;

    // normal practics
    // const token = {};
    // const token = () => {};

    // best practics
    @Injectable({
        providedIn: 'root',
    })
    class ClassToken {}

    class User {
        // readonly classTokenInstance: ClassToken = new ClassToken();
        readonly classTokenInstance: ClassToken = inject(ClassToken);

        constructor() {
            console.log('create User class');
        }
    }

    const injectionToken = new InjectionToken<User>('Test token', {
        providedIn: 'root',
        factory: () => new User(),
    });

    const universalToken = new InjectionToken<User>('Test universal token');

    const parentInjector = Injector.create({
        providers: [
            // User,
            // ClassToken,
        ],
    });

    const injector = Injector.create({
        parent: parentInjector,
        providers: [
            // {
            //     provide: injectionToken, // token
            //     useValue: 'Egor',
            // },
            ClassToken,
            // {
            //     provide: ClassToken,
            //     useClass: ClassToken,
            // },
            User,
            // {
            //     provide: User,
            //     useClass: User,
            // }
            // {
            //     provide: injectionToken,
            //     useClass: User, // class
            // },
            {
                provide: injectionToken,
                useExisting: User, // token
            },
            // {
            //     provide: universalToken,
            //     useFactory: () => 'Egor',
            // },
            // {
            //     provide: universalToken,
            //     useFactory: () => new User(),
            // },
            {
                provide: universalToken,
                useFactory: () => inject(User).classTokenInstance,
            },
        ],
    });

    // console.log(injector.get(token as InjectionToken<any>));
    // console.log(injector.get(User));
    // console.log(injector.get(ClassToken));
    // console.log(injector.get(User).classTokenInstance === injector.get(ClassToken));
    // console.log(injector.get(User) === injector.get(injectionToken));
    // console.log(injector.get(User) === injector.get(universalToken));

    // console.log(injector.get(ClassToken));
    console.log(injector.get(User));

    // setTimeout(() => {
    //     console.log(injector.get(User));
    //     console.log(injector.get(User));
    //     console.log(injector.get(User));
    //     console.log(injector.get(User));
    //     console.log(injector.get(User));
    // }, 4000)
}

testInjector();
