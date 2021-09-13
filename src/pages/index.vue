<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png" />-->
  <!--  <HelloWorld msg="Hello Vue 3 + Vite" />-->
  <!--  <mc-scroll-container text="lol" direction="horizontal">-->
  <!--    <div>123</div>-->
  <!--    <div>123333</div>-->
  <!--  </mc-scroll-container>-->


  <McButton text="hii" iconName="close"/>
  <McButton text="Справочники" radius="pill" type="error" icon-name="reference-book" />

<!--    <McToggle :modelValue="value"/>-->
<!--  <McNotification title="1231" type="primary" meta="22222"/>-->

  <McTable :data="tableData">
    <McTableColumn prop="date" label="Наименование" sortable> </McTableColumn>
    <McTableColumn prop="name" label="Активность" width="126" sortable align="center">
      <template #default="scope">
        <McToggle :model-value="scope.row.checked" />
      </template>
    </McTableColumn>
    <McTableColumn prop="address" label="Действия" width="112" align="center">
      <McIcon name="eye" class="cursor-pointer w-4" />
    </McTableColumn>
  </McTable>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03 4',
          name: 'Tomklj',
          address: 'No. 189, Grove St, Los Angeles',
          checked: true,
        },
        {
          date: '2016-05-02 5 ',
          name: 'Tomghj',
          address: 'No. 189, Grove St, Los Angeles 1',
          checked: false,
        },
        {
          date: '2016-05-04 6 ',
          name: 'Tomgfd',
          address: 'No. 189, Grove St, Los Angeles 2',
          checked: true,
        },
        {
          date: '2016-05-01 7',
          name: 'Tomasd',
          address: 'No. 189, Grove St, Los Angeles 3',
          checked: false,
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
