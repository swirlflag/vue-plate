<template>
<div class="page__outer">
    <div class="page__inner">
        <div class="paragraph">

            <div class="paragraph__title size--1">
                전역적인 시스템
            </div>
            <div class="paragraph__divider"></div>
            <div class="paragraph__title size--2">
                시작
            </div>
            <div class="paragraph__text">
                init/init.js 에서 프로젝트 초기 셋팅에 대한 설정들을 기입해 줍니다.
                이중에서 초기 플러그인 설치에 대한 내용은 plugin페이지에서 설명합니다. <router-link to="/plugin">링크</router-link>
            </div>
            <div class="paragraph__divider"></div>

            <div class="paragraph__title size--2">
                Scroll Lock
            </div>

            <div class="paragraph__text st-italic">
                현재 스크롤 잠금 : {{ this.$store.state.is_pageScrollLock }}
            </div>

            <div>
                <ButtonType1    text="스크롤 lock/unlock 테스트"
                                @click="toggleScrollLock" 
                />
            </div>

            <div class="paragraph__text">
                스크롤 잠금 기능은 page의 컨텐츠를 주 대상으로 합니다. 
                만약 모달 컨텐츠 내부의 내용이 많아서 스크롤 되어야 한다면, 해당 엘리먼트 내부의 스크롤로 처리합니다.
                이때 스크롤 영역을 감싸는 엘리먼트는 window의 크기보다 작아야 합니다.
            </div>

            <span class="paragraph__divider"></span>
            
            <div class="paragraph__title size--2">
                Modal Syetem
            </div>

            <div class="paragraph__text st-italic">
                모달 딤드 클릭시 모달 해제 : {{ this.$store.state.modal.use_clickDimmedThenCloseModal }}
                <br>모달 오픈시 스크롤 잠금 : {{ this.$store.state.modal.use_openModalWithLockScroll }}
            </div>

            <div class="paragraph__text">
                다음은 modal plate에 예시로 등록된 모달 요소들의 호출 버튼입니다.
            </div>

            <div>
                <ButtonType1    text="Alert - simple"
                                @click="alertSimple" 
                />
                <br><br>
                <ButtonType1    text="Alert - callback"
                                @click="alertGotoMain" 
                />
                <br><br>
                <ButtonType1    text="Confirm - callback"
                                @click="confirmSimple" 
                />
                <br><br>
                <ButtonType1    text="bottomSheet - select"
                                @click="bottomSheetCompany" 
                /> 
                <br><br>
                <span>
                    이름 : <strong> {{ this.selectCompany }} </strong>
                </span>
                <br><br>
                <span>
                    순번 : <strong> {{ this.selectCompanyIndex }} </strong> 
                </span>
            </div>

            <div class="paragraph__title size--3">
                기본 정보
            </div>

            <div class="paragraph__text">
                모든 공통 모달의 구조는 PlateModal.vue에 모아 관리되며 이는 router로 관리되는 #page_plate보다 엘리먼트가 상위에 위치해 있어, 
                페이지에 관계없이 호출 및 변경할수 있습니다. 기본적으로 조작값들을 store에 등록해서 사용합니다.
            </div>

            <div class="paragraph__title size--3">
                깊이
            </div>

            <div class="paragraph__text">
                뷰 플레이트에서는 , modal system을 1depth로 지정합니다.
                즉, 모달 위에 새로운 모달이 뜨는 형태는 금지됩니다.
                이는 개발이 아닌 사용 관점에서의 UX에서 이미 허용되지 않는 흐름이기도 합니다.
                컨텐츠 기획에 따라 중첩된 모달이 필요한경우, 새로운 컴포넌트로써 제작해
                독립적인 스코프 내부에서 중첩 모달을 구현해야 할 것입니다.
            </div>

            <div class="paragraph__title size--3">
                dimmed 
            </div>
            <div class="paragraph__text">
                모든 모달의 컨텐츠는 각자가 아닌 #modal이 가지고 있는 .modal__dimmed를 공통으로 이용하여 딤드를 표시합니다.
                따라서 모달의 컨텐츠를 호출할때 딤드의 호출 조작도 함께 해야하며 이를통해 딤드를 표시할 모달과 그렇지 않은 모달을 동적으로 제어할수 있습니다.
            </div>

            <span class="paragraph__divider"></span>
            
            <div class="paragraph__title size--2">
                미지원 대응 환경
            </div>
            <div>
                <ButtonType1    text="미지원 대응 화면 확인"
                                @click="coverdTest" 
                />
                &nbsp;&nbsp;
                새로고침을 통해 돌아와 주세요.
            </div>
            <div class="paragraph__text">
                미지원 하려는 환경에서 표시할 페이지를 따로 제작해 표시할수 있습니다. 
                이경우 본 페이지의 메인 컨텐츠엔 접근할 수 없으며 
                프로젝트의 성격에 따라 핵심 컨텐츠를 약식으로 표시해주거나, 적절히 생략합니다.
                또한 특별한 이상이 없는 경우에 다른 환경에서 접속할 수 있는 방법에 대한 안내를 반드시 해주어야 합니다.
            </div>

            <span class="paragraph__divider"></span>
            
            <div class="paragraph__title size--2">
                404
            </div>
            <div class="paragraph__text">
                404 페이지는 기본적으로 router.js에서 해당되는 라우터 페이지가 없을때 자동으로 연결됩니다.
                철저히 SPA인 클라이언트 기능만으로 동작하므로 정적 프로젝트를 넘어서면 404처리 로직을 어느정도 수정해야합니다.
                방문한 에러 path는 history에서 곧바로 삭제하기 때문에 <strong>[ before → error → 404 ]</strong> 가 아닌 <strong>[ before → 404 ]</strong>의 기록이 남게 됩니다.
            </div>
            <div>
                <ButtonType1    text="임의의 에러 path로 이동"
                                @click="page404Test"
                />
            </div>
            <div class="paragraph__text">
                
            </div>

        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonType1 from '@/components/input/ButtonType1.vue';

export default {
    name : 'PageLayout',
    data() {
        return {
            companytList : [
                'Apple Inc.', 
                'Amazon.com, Inc.',
                'Microsoft Corporation',
                'Alphabet Inc. Class C Capital Stock',
                'Alphabet Inc. Class A',
                'Facebook, Inc. Class A',
                'Tesla, Inc.',
                'NVIDIA Corporation',
                'Adobe Inc.',
                'PayPal Holdings, Inc.',
                'Netflix, Inc.',
                'Intel Corporation.',
                'Comcast Corporation Class A',
                'PepsiCo, Inc.',
                'Cisco Systems, Inc.',
            ],
            selectCompany : '선택된 아이템의 이름이 나타납니다.',
            selectCompanyIndex : null,
        }
    },
    components : {
        ButtonType1,
    },
    computeds: {
        ...mapState([
        ])
    },
    methods : {
        alertSimple() {
            this.$store.dispatch('showModalAlert' , '알림 내용이 들어갑니다.');
        },
        alertGotoMain() {
            const payload = {
                message : '메인으로 이동합니다.',
                close : () => this.$router.push('/'),
            };
            this.$store.dispatch('showModalAlert', payload);
        },
        confirmSimple() {
            const payload = {
                message : '메인으로 이동하려면 확인을 누르세요.',
                close : (result) => {
                    if(result){
                        this.$router.push('/');
                    }
                },
            };
            this.$store.dispatch('showModalConfirm', payload);
        },
        bottomSheetCompany() {
            const payload = {
                list : this.companytList,
                already : this.selectCompanyIndex,
                close : (item, index) => {
                    this.selectCompany = item;
                    this.selectCompanyIndex = index;
                },
            }
            this.$store.dispatch('openBottomSheet' , payload);
        },
        toggleScrollLock () {
            if(this.$store.state.is_pageScrollLock){
                this.$store.commit('SCROLL_unlock');
            }else {
                this.$store.commit('SCROLL_lock');
            }
        },

        coverdTest() {
            this.$store.state.use_coverdPlate = true
        },
        page404Test() {
            const randomPath = '/' + Math.floor(Math.random()*100);
            const modalAlertPayload = {
                message : `${window.location.origin}${randomPath} 로 이동을 시도합니다.`,
                close : (result) => {
                    if(result){
                        this.$router.push(randomPath);
                    }
                }
            };
            this.$store.dispatch('showModalConfirm' , modalAlertPayload);
        },
        
    }
}
</script>

<style>

</style>