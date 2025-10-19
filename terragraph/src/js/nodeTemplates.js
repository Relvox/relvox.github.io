// Node Templates

export const rgbNodeTemplate = (nodeId) => `
<div style="position: relative;" data-node-id="${nodeId}">
    <!-- Left stacked groups (inputs) -->
    <div class="port-stack left">
        <div class="stack-group">
            <div class="stack-ports">
                <div class="stack-port" data-port-name="RGB Combined" data-port-type="input" data-port-id="input_1"></div>
            </div>
        </div>
        <div class="stack-group disabled">
            <div class="stack-ports">
                <div class="stack-port" data-port-name="R Channel" data-port-type="input" data-port-id="input_2"></div>
                <div class="stack-port" data-port-name="G Channel" data-port-type="input" data-port-id="input_3"></div>
                <div class="stack-port" data-port-name="B Channel" data-port-type="input" data-port-id="input_4"></div>
            </div>
        </div>
    </div>

    <!-- Right stacked groups (outputs) -->
    <div class="port-stack right">
        <div class="stack-group">
            <div class="stack-ports">
                <div class="stack-port" data-port-name="RGB Combined" data-port-type="output" data-port-id="output_1"></div>
            </div>
        </div>
        <div class="stack-group">
            <div class="stack-ports">
                <div class="stack-port" data-port-name="R Channel" data-port-type="output" data-port-id="output_2"></div>
                <div class="stack-port" data-port-name="G Channel" data-port-type="output" data-port-id="output_3"></div>
                <div class="stack-port" data-port-name="B Channel" data-port-type="output" data-port-id="output_4"></div>
            </div>
        </div>
    </div>

    <!-- Node content -->
    <div class="node-preview" data-preview="${nodeId}">
        <span>RGB Preview (256×256)</span>
    </div>
    <div class="node-content">
        <div class="node-control">
            <label>Upload Image</label>
            <input type="file" accept="image/png,image/bmp" data-upload="${nodeId}" />
        </div>
        <div class="node-control">
            <label>Operation</label>
            <select data-operation="${nodeId}">
                <option value="add">+ Add</option>
                <option value="subtract" selected>- Subtract</option>
                <option value="subtract-inv">- Subtract (Inverse)</option>
                <option value="multiply">* Multiply</option>
                <option value="xor">⊕ XOR</option>
            </select>
        </div>
    </div>
</div>
`;

export const rgbaNodeTemplate = (nodeId) => `
<div style="position: relative;" data-node-id="${nodeId}">
    <!-- Left stacked groups (inputs) -->
    <div class="port-stack left">
        <div class="stack-group">
            <div class="stack-ports">
                <div class="stack-port" data-port-name="RGBA Combined" data-port-type="input" data-port-id="input_1"></div>
            </div>
        </div>
        <div class="stack-group">
            <div class="stack-ports">
                <div class="stack-port" data-port-name="R Channel" data-port-type="input" data-port-id="input_2"></div>
                <div class="stack-port" data-port-name="G Channel" data-port-type="input" data-port-id="input_3"></div>
                <div class="stack-port" data-port-name="B Channel" data-port-type="input" data-port-id="input_4"></div>
                <div class="stack-port" data-port-name="A Channel" data-port-type="input" data-port-id="input_5"></div>
            </div>
        </div>
    </div>

    <!-- Right stacked groups (outputs) -->
    <div class="port-stack right">
        <div class="stack-group">
            <div class="stack-ports">
                <div class="stack-port" data-port-name="RGBA Combined" data-port-type="output" data-port-id="output_1"></div>
            </div>
        </div>
        <div class="stack-group">
            <div class="stack-ports">
                <div class="stack-port" data-port-name="R Channel" data-port-type="output" data-port-id="output_2"></div>
                <div class="stack-port" data-port-name="G Channel" data-port-type="output" data-port-id="output_3"></div>
                <div class="stack-port" data-port-name="B Channel" data-port-type="output" data-port-id="output_4"></div>
                <div class="stack-port" data-port-name="A Channel" data-port-type="output" data-port-id="output_5"></div>
            </div>
        </div>
    </div>

    <!-- Node content -->
    <div class="node-preview" data-preview="${nodeId}">
        <span>RGBA Preview (512×512)</span>
    </div>
    <div class="node-content">
        <div class="node-control">
            <label>Upload Image</label>
            <input type="file" accept="image/png,image/bmp" data-upload="${nodeId}" />
        </div>
        <div class="node-control">
            <label>Operation</label>
            <select data-operation="${nodeId}">
                <option value="add" selected>+ Add</option>
                <option value="subtract">- Subtract</option>
                <option value="subtract-inv">- Subtract (Inverse)</option>
                <option value="multiply">* Multiply</option>
                <option value="xor">⊕ XOR</option>
            </select>
        </div>
    </div>
</div>
`;
