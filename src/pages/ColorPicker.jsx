import React from 'react';
import {ColorPickerComponent} from "@syncfusion/ej2-react-inputs";
import {Header} from "../components";

const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Color Picker"></Header>
            <div className="text-center">
                <div id="preview"></div>
                <div className="flex justify-center items-center gap-20 flex-wrap">
                    <div>
                        <p className="text-2xl mt-2 mb-4 font-semibold">Inline Pallete</p>
                        <ColorPickerComponent id="inline-pallete" mode="Palette" inline modeSwitcher={false}
                                              showButtons={false} change={change}></ColorPickerComponent>
                    </div>
                    <div>
                        <p className="text-2xl mt-2 mb-4 font-semibold">Inline Picker</p>
                        <ColorPickerComponent id="inline-picker" mode="Picker" inline modeSwitcher={false}
                                              showButtons={false} change={change}></ColorPickerComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;