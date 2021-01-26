import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const worksRef = db.collection('works')

export const state = () => ({
  works: []
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
        siteLink:"https://" + work.siteLink,
        pic: work.pic,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        updated: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
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