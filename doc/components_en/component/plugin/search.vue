<template>
  <div class="doc">
    <h2>Search Input</h2>

    <h3>Basic</h3>
    <p>Provides a simple search component package for many places.</p>
    <example demo="plugins/search1"></example>

    <h3>Query component with search button</h3>
    <example demo="plugins/search2"></example>

    <h3>Block</h3>
    <example demo="plugins/search3"></example>

    <h3>Search Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>position</td>
        <td>Search Icon display location</td>
        <td>String</td>
        <td>-</td>
        <td>end</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>String</td>
        <td>-</td>
        <td>search...</td>
      </tr>
      <tr>
        <td>block</td>
        <td>display: block</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>showSearchButton</td>
        <td>Whether show search button</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>searchText</td>
        <td>Search button text</td>
        <td>String</td>
        <td>-</td>
        <td>Search</td>
      </tr>
      <tr>
        <td>triggerType</td>
        <td>Query trigger type</td>
        <td>String</td>
        <td>enter, input</td>
        <td>enter</td>
      </tr>
    </table>


    <h3>Search Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>search</td>
        <td>The event that triggered the query</td>
      </tr>
      <tr>
        <td>input</td>
        <td>Event that triggers an input value change</td>
      </tr>
    </table>
  </div>
</template>
