<template>
  <div class="wrapper min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-body-secondary">Sign In to your account</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" autocomplete="username" v-model="username"
                      @keypress="typing = true" @keyup.enter="addTodo($event)" />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput type="password" placeholder="Password" autocomplete="current-password"
                      v-model="password" @keypress="typing = true" @keyup.enter="addTodo($event)" />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4"> Login </CButton>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Forgot password?
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <CButton color="light" variant="outline" class="mt-3">
                    Register Now!
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import * as mainWk from '@/stores/worker.js';
const temMain = "userLogin";
let worker = mainWk.init();
worker.onmessage = (e) => {
  console.log(e.data);
}

export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
      typing: false
    };
  },
  methods: {
    addTodo(event) {
      if (event) event.preventDefault();
      mainWk.callApi({
        cmd: "user_login",
        body: {
          user_name: this.username,
          password: this.password,
        },
        template: temMain,
        userToken: false,
      });
    },

    clearTodo() {
      this.name = "";
    },

    refreshTodo() {
      bus.$emit("refreshTodo");
    }
  },
})
</script>
