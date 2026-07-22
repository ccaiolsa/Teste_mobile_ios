import {$} from '@wdio/globals'


class Home{

    get profileTabe () {
        return $('~profile');
    }

}

export default new Home();
