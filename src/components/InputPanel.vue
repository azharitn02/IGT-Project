<script>
  export default {
    data() {
      return {
        rows: [
          { dropdownValue: '', inputValue: '' }
        ],
        dropdownOptions: ['Age', 'Education', 'Interest', 'Language', 'Marital Status', 'Skill']
      };
    },
    methods: {
      addRow() {
        this.rows.push({ dropdownValue: '', inputValue: '' });
      },
      deleteRow(index) {
        this.rows.splice(index, 1);
      }
    }
  };
</script>

<template>
  <div>
      <h1>Input Panel</h1>
      <table>
        <thead>
          <tr>
            <!-- <th>Dropdown</th>
            <th>Input</th> -->
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in rows" :key="index">
            <td>
              <select v-model="row.dropdownValue">
                <option v-for="option in dropdownOptions" :value="option">{{ option }}</option>
              </select>
            </td>
            <td>
              <input type="text" v-model="row.inputValue" />
            </td>
            <td>
              <button @click="deleteRow(index)">Delete Row</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <button @click="addRow">Add Row</button>
    </div>
</template>
  
  
  