import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const worksRef = db.collection('works')

export const state = () => ({
  works: [],
  editWork:{}
})

export const actions = {
  //firebaseのデータをステートに格納
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('works', worksRef)
  }),
  add: firestoreAction((context, work) => {
    if(work.title.trim()) {
      worksRef.add({
        title: work.title,
        siteLink: work.siteLink,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  edit: firestoreAction((context, row) => {
    state.editWork = row
    console.log(state.editWork)
  }),
  remove: firestoreAction((context, id) => {
    worksRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done
    })
  })
}

export const getters = {
  orderdWorks: state => {
    return _.sortBy( state.works, 'created');
  }
}