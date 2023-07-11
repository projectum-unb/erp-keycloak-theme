<#macro kw content="" footer="" header="">
  <div class="bg-white rounded-lg shadow-lg">
    <img src="${url.resourcesPath}/images/erp-login.jpg" class="rounded-t-lg">

    <div class="p-8 space-y-6">
      <#if header?has_content>
        <div class="space-y-4">
          ${header}
        </div>
      </#if>
      <#if content?has_content>
        <div class="space-y-4">
          ${content}
        </div>
      </#if>
      <#if footer?has_content>
        <div class="space-y-4">
          ${footer}
        </div>
      </#if>
    </div>
  </div>
</#macro>
