<template>
  <div class="grow">
    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <h2 class="text-2xl text-slate-800 font-bold mb-5">Mi cuenta</h2>
      <!-- Picture -->
      <section>
        <div class="flex items-center">
          <div class="mr-4">
            <img class="w-20 h-20 rounded-full" src="../../images/user-avatar-80.png" width="80" height="80"
              alt="User upload" />
          </div>
          <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Cambiar</button>
        </div>
      </section>
      <!-- Business Profile -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Perfil profesional</h3>
        <div class="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
        </div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="name">Nombres</label>
            <input type="text" v-model="user.data.name" id="name" class="form-input w-full" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">ID de usuario</label>
            <input type="text" v-model="user.data.id" id="business-id" class="form-input w-full" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="location">Ubicación</label>
            <input type="text" id="location" class="form-input w-full" />
          </div>
        </div>
      </section>
      <!-- Email -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Email</h3>
        <div class="text-sm">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</div>
        <div class="flex flex-wrap mt-5">
          <div class="mr-2">
            <label class="sr-only" for="email">Email de recuperación</label>
            <input id="email" v-model="user.data.email" class="form-input" type="email" />
          </div>
          <button class="btn border-slate-200 hover:border-slate-300 shadow-sm text-indigo-500">Cambiar</button>
        </div>
      </section>
      <!-- Password -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Contraseña</h3>
        <div class="text-sm">Puede establecer una contraseña permanente si no desea utilizar códigos de inicio de sesión
          temporales.</div>
        <div class="mt-5">
          <button class="btn border-slate-200 shadow-sm text-indigo-500">Establecer nueva contraseña</button>
        </div>
      </section>
      <!-- Smart Sync -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Smart Sync update for Mac</h3>
        <div class="text-sm">With this update, online-only files will no longer appear to take up hard drive space.</div>
        <div class="flex items-center mt-5">
          <div class="form-switch">
            <input type="checkbox" id="toggle" class="sr-only" v-model="sync" true-value="On" false-value="Off" />
            <label class="bg-slate-400" for="toggle">
              <span class="bg-white shadow-sm" aria-hidden="true"></span>
              <span class="sr-only">Enable smart sync</span>
            </label>
          </div>
          <div class="text-sm text-slate-400 italic ml-2">{{ sync }}</div>
        </div>
      </section>
    </div>
    <!-- Panel footer -->
    <footer>
      <div class="flex flex-col px-6 py-5 border-t border-slate-200">
        <div class="flex self-end">
          <button class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancelar</button>
          <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Guardar cambios</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../../store/user';
import { storeToRefs } from 'pinia';

const store = useUserStore()
const { user } = storeToRefs(store);

const sync = ref('Off')

</script>