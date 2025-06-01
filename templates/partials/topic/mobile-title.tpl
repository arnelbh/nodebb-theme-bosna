<pre>{debug}</pre>
{{{ if config.theme.topicInfoInMobilebar }}}
<div class="d-flex hidden" id="mobileTopicTitle" >
    <div class="topic-container">
        <a class="truncate-title topic-label" href="{mobileNavUrl}">{mobileNavTitle} Title</a>
        <a class="topic-tag" href="{relative_path}/category/{mobileNavCategory.slug}">{mobileNavCategory.name} Category</a>
    </div>
</div>
{{{ end }}}