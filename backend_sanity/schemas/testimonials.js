export default {
  name:'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields:[
    {
      name:'name',
      title:'name',
      type: 'string'
    },
    {
      name:'company',
      title:'Company',
      type: 'string'
    },
    {
      name:'imageUrl',
      title:'ImagURL',
      type: 'image',
      option:{
        hostpot:true,

      }
    },
    {
      name:'feedbak',
      title:'Feedbak',
      type: 'string'
    },
  ]
}