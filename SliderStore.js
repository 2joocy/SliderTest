import {observable, action} from 'mobx'

class SliderStore{
    @observable sliderVal = 0;

    @action
    setSliderVal(val){
        this.sliderVal = val;
    }
}

const sliderVal = new SliderStore();

export default sliderVal;