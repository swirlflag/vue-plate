<template>
    <div    class="dropdown__custom"  
            :class="{'is--open' : openState}" 
            ref="ref_dropDown"
    >
        <slot></slot>
        <div    class="dropdown__visual" 
                ref="ref_visual"
                :style="{height : `${openState ? fullHeight : singleHeight}px`}"
        >
            <div    class="dropdown__display" 
                    ref="ref_display" 
                    :style="{height : `${singleHeight}px`}"
                    @click="toggle" 
                    v-html="selectText"
            >

            </div>

            <div    class="dropdown__option"
                    v-for="(item, idx) in optionsData"
                    :data-value="item.value" 
                    :data-idx="idx"
                    :key="idx"
                    :style="{height : `${singleHeight}px`}"
                    @click="(e) => {selectChange(idx)}" 
                    v-html="item.html"
            >
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openState : false,
 
            el_select : null,
            el_options : null,

            selectIndex : -1,
            selectOption : null,

            optionsData : [],
            selectText : '&nbsp;',

            fullHeight : 0,
            singleHeight : 0,
            observer : null,
            selectItem : null,
            selectVisual : null,
            beforeSelectVisual : null,
        }
    },
    methods : {
        selectChange(idx) {
            this.beforeIndex = this.selectIndex;
            this.selectIndex = idx;
            this.optionsData[this.beforeIndex].selected = false;
            this.optionsData[this.selectIndex].selected = true;

            const items = this.$refs.ref_visual.querySelectorAll('.dropdown__option');
            if(!items.length){
                return;
            }
            this.beforeSelectVisual = this.selectVisual || null;
            this.selectVisual = items[this.selectIndex];
            this.el_select.selectedIndex = this.selectIndex;
            this.selectItem = this.el_options[this.selectIndex];       

            for(let i = 0, l = this.el_options.length; i < l; ++i){
                if(i === this.selectIndex){
                    this.el_options[this.selectIndex].selected = 'selected';
                }else {
                    this.el_options[this.beforeIndex].removeAttribute('selected');
                }
            }

            if(!this.selectItem){
                return
            }
            if(this.beforeSelectVisual){
                this.beforeSelectVisual.classList.remove('is--select');
            }
            if(this.selectVisual){
                this.selectVisual.classList.add('is--select');
            }
            this.selectText = this.selectItem.innerHTML;
            if (this.beforeSelectVisual != null) {
                this.$emit('change', this.selectItem,this.el_select)
            }
            this.close();
        },
        open() {
            this.openState = true;
        },
        close() {
            this.openState = false;
        },
        toggle() {
            this.openState = !this.openState
        },
        detectedDropdown(e) {
            const path = e.path;
            if(!path){
                return
            }
            let detect = false;
            for(let i = 0, l = path.length; i < l; ++i){
                if(path[i] === this.$refs.ref_dropDown){
                    detect = true;
                }
            }
            if(!detect && this.openState){
                this.close();
            }
        },
        copyForm() {
            this.el_options = this.$refs.ref_dropDown.querySelectorAll('option');
            this.optionsData = [];
            
            const $dropdown = this.$refs.ref_dropDown;
            const $visual = this.$refs.ref_visual;
            const $display = this.$refs.ref_display;

            this.selectText = this.el_select.getAttribute('placeholder') || '&nbsp;';
            
            for(let i = 0, l = this.el_options.length; i < l; ++i){
                const option = this.el_options[i];
                const value = option.getAttribute('value');
                const selected = option.selected;

                if(selected){
                    this.selectIndex = i;
                }

                const html = option.innerHTML;

                this.optionsData.push({value,html,selected});
            }

            this.singleHeight = this.height ? this.height : parseInt(getComputedStyle($display).height);
            this.fullHeight = (this.optionsData.length + 1) * this.singleHeight;

            $dropdown.style.height = this.singleHeight +'px';

            setTimeout(() => {
                $visual.style.transition = 'height 400ms cubic-bezier(0.25, 1, 0.5, 1)';
                this.selectChange(this.selectIndex); 
            },0);

        },
    },
    created() {
        window.addEventListener('click' , this.detectedDropdown );
    },
    mounted() {
        this.el_select = this.$refs.ref_dropDown.querySelector('select');

        this.copyForm();


        this.observer = new MutationObserver((mutations) => {
            let result = false;
            mutations.forEach((mutation) => { 
                if(mutation.target && mutation.target.tagName === "SELECT"){
                    result = true;    
                }
            });
            if(result){
                console.log('copy');
                this.copyForm();
            }
        });

        this.observer.observe(this.$refs.ref_dropDown, {childList : true, subtree : true});    
    }
}
</script>
<style>

select {
    display: none;
}

.dropdown__custom {
    transition: height 0.3s ease;
    position: relative;
    letter-spacing: -1px;
    z-index: 1;
    transition: z-index 1000ms ease;
}
.dropdown__custom.is--open {
    z-index: 10;
}

.dropdown__visual {
    box-sizing: border-box;
    border-radius: 4px;
    height: auto;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.12) ;
    background-color: #fff;
}
.dropdown__display {
    position: relative;
}
.dropdown__display::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0; right: 0;
    width: 30px; height: 99%;
    /* background-image: url("../../assets/components/icon-arrow-down.svg");  */
    background-repeat: no-repeat;
    background-position: center 60%;
    background-size: 18px;
    transition: transform 0.25s ease;
    box-sizing: border-box;
    transform: rotate(0deg);
}
.is--open .dropdown__display::before {
    transform: rotate(180deg);
}
.dropdown__display,
.dropdown__option {
    display: flex;
    align-items: center;
    padding-left: 16px;
    box-sizing: border-box;
    white-space: nowrap;
    border-bottom: 1px solid  rgba(0, 0, 0, 0.12);
    transition: background-color 0.3s ease;
    padding: 14px 10px;
    line-height: 1em;
    letter-spacing: .0071428571em;
}

.is--select,
.dropdown__option:hover{
    background-color: #DDD;
    color: rgba(0,0,0,.87);
}

</style>