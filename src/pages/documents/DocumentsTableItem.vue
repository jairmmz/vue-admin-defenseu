<template>
    <tr>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
            <div class="flex items-center">
                <label class="inline-flex">
                    <span class="sr-only">Select</span>
                    <input :id="document.id" class="form-checkbox" type="checkbox" :value="value" @change="check"
                        :checked="checked" />
                </label>
            </div>
        </td>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <div class="font-medium text-slate-800">{{ document.title }}</div>
        </td>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <div>
                <a :href="getFileUrl(document.file)" class="hover:text-blue-600" target="_blank">Ver documento</a>
            </div>
        </td>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <div>{{ document.date_document }}</div>
        </td>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <div class="flex items-center">
                <div :class="`text-xs inline-flex font-medium ${changeColorStatus} rounded-full text-center px-2.5 py-1`">
                    <strong>{{ document.status }}</strong>
                </div>
            </div>
        </td>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
            <div class="flex space-x-1">
                <button @click="viewDocument(document.id)" class="text-slate-400 hover:text-slate-500 rounded-full">
                    <span class="sr-only">Ver</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
                <router-link :to="{ name: 'app.documents.edit', params: { id: document.id }}" class="text-blue-500 hover:text-blue-700 rounded-full">
                    <span class="sr-only">Editar</span>
                    <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
                        <path
                            d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
                    </svg>
                </router-link>
                <button @click="deleteDocumentModal(document.id)" class="text-rose-500 hover:text-rose-600 rounded-full">
                    <span class="sr-only">Eliminar</span>
                    <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
                        <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                        <path
                            d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
                    </svg>
                </button>
            </div>
        </td>
    </tr>
</template>
  
<script>
import { computed } from 'vue'
import { useDocumentStore } from '../../store/documents'

export default {
    name: 'DocumentsTableItem',
    props: ['document', 'value', 'selected'],
    setup(props, context) {
        const checked = computed(() => props.selected.includes(props.value))

        const changeColorStatus = computed(() => {
            if (props.document.status === 'activo') {
                return 'bg-emerald-100 text-emerald-600';
            } else {
                return 'bg-slate-100 text-slate-500';
            }
        })

        const store = useDocumentStore();

        const viewDocument = (id) => {
            try {
                store.viewDocument(id);
            } catch (error) {
                console.log(error);
            }
        }

        const deleteDocumentModal = (id) => {
            try {
                store.modalDelete(id);
            } catch (error) {
                console.log(error);
            }
        }

        function check() {
            let updatedSelected = [...props.selected]
            if (this.checked) {
                updatedSelected.splice(updatedSelected.indexOf(props.value), 1)
            } else {
                updatedSelected.push(props.value)
            }
            context.emit('update:selected', updatedSelected)
        }

        const getFileUrl = (filename) => {
            return `${import.meta.env.VITE_API_BASE_URL}/assets/documents/${filename}`;
        }

        return {
            check,
            checked,
            changeColorStatus,
            getFileUrl,
            viewDocument,
            deleteDocumentModal,
        }
    },
}
</script>